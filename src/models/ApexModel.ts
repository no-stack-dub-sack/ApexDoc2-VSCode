import * as tags from './tags';
import * as vscode from 'vscode';
import ApexDoc from '../apexDoc/ApexDoc';
import Utils from '../utils/Utils';
import { existsSync } from 'fs';
import { resolve } from 'path';

abstract class ApexModel {

    protected annotations: string[] = [];
    protected author: string = '';
    protected deprecated: string = '';
    protected description: string = '';
    protected example: string = '';
    protected exception: string = '';
    protected groupContentPath: string = '';
    protected groupName: string = '';
    protected lineNum: number = 0;
    protected nameLine: string = '';
    protected params: string[] = [];
    protected returns: string = '';
    protected scope: string = '';
    protected see: string[] = [];
    protected since: string = '';

    protected constructor(comments: string[]) {
        this.parseComments(comments);
    }

    public abstract getName(): string;

    public getAnnotations(): string[] {
        return this.annotations;
    }

    public getDescription(): string {
        return !this.description ? '' : this.description;
    }

    public getLineNum(): number {
        return this.lineNum;
    }

    public getNameLine(): string {
        return this.nameLine;
    }

    public getScope(): string {
        return !this.scope ? '' : this.scope;
    }

    // make sure path relative to target
    // directory exists for @group-content tag
    private pathExists(contentPath: string): boolean {
        let path = resolve(ApexDoc.config.sourceDirectory, contentPath.trim());
        if (/.*\.s?html?$/.test(contentPath.trim()) && existsSync(path)) {
            return true;
        } else {
            vscode.window.showWarningMessage(`@group-content path '${path}' in file '${ApexDoc.currentFile}' is invalid!`);
            return false;
        }
    }

    private parseComments(comments: string[]): void {
        let currBlock: string | null = null, block = null;
        for (let comment of comments) {
            let newBlock = false, isBreak = false;
            let lowerComment = comment.toLowerCase();
            let i: number;

            // skip lines that are just opening or closing comment blocks
            if (comment.trim() === '/**' || comment.trim() === '*/') {
                continue;
            }

            // if we find a tag, start a new block
            if (((i = lowerComment.indexOf(block = tags.AUTHOR.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.SINCE.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.SEE.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.RETURNS.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.PARAM.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.EXCEPTION.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.DEPRECATED.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.DESCRIPTION.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.GROUP.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.GROUP_CONTENT.label)) >= 0)
                || ((i = lowerComment.indexOf(block = tags.EXAMPLE.label)) >= 0)) {

                comment = comment.substring(i + block.length);
                currBlock = block;
                newBlock = true;
            }

            // get everything after opening '*'s
            let line = '';
            comment = comment.trim();
            for (let j = 0; j < comment.length; ++j) {
                let ch = comment.charAt(j);
                // skip the '/' of the opening
                // block so comment is trimmed correctly
                if (ch === '/' && j === 0) {
                    continue;
                }

                if (ch !== '*') {
                    line = comment.slice(j);
                    break;
                }
            }

            // replace docBlock break marker and indicate we should break after
            // this round. Otherwise we may get some strange behavior due to
            // multi-line support and this common parser for all models
            if (line.includes(ApexDoc.DOC_BLOCK_BREAK)) {
                line = line.replace(ApexDoc.DOC_BLOCK_BREAK, '');
                isBreak = true;
            }

            // add line to appropriate block...
            // if currBlock was not reset on this iteration we're on the next line of the last tag, add line
            // to that value. Allow empty lines in example blocks to preserve whitespace in complex examples
            if (currBlock !== null && (line.trim() || !line.trim() && currBlock === tags.EXAMPLE.label)) {
                if (currBlock === tags.AUTHOR.label) {
                    this.author += (this.author ? ' ' : '') + line.trim();
                } else if (currBlock === tags.SINCE.label) {
                    this.since += (this.since ? ' ' : '') + line.trim();
                } else if (currBlock === tags.SEE.label) {
                    this.see.push(line.trim());
                } else if (currBlock === tags.RETURNS.label) {
                    this.returns += (this.returns ? ' ' : '') + line.trim();
                } else if (currBlock === tags.PARAM.label) {
                    let p = (newBlock ? '' : this.params.pop());
                    this.params.push(p + (p && p.length > 0 ? ' ' : '') + line.trim());
                } else if (currBlock === tags.EXCEPTION.label) {
                    this.exception += (this.exception ? ' ' : '') + line.trim();
                } else if (currBlock === tags.DEPRECATED.label) {
                    this.deprecated += (this.deprecated ? ' ' : '') + line.trim();
                } else if (currBlock === tags.DESCRIPTION.label) {
                    this.description += (this.description ? ' ' : '') + line.trim();
                } else if (currBlock === tags.GROUP.label) {
                    this.groupName += line.trim();
                } else if (currBlock === tags.EXAMPLE.label) {
                    this.example += (this.example ? ' \n'  : '') + line;
                } else if (currBlock === tags.GROUP_CONTENT.label) {
                    if (this.pathExists(line.trim())) {
                        this.groupContentPath += line.trim();
                    }
                }
            }
            // not a recognized tag, assume we're in un-tagged description
            else if (currBlock === null && line.trim()) {
                currBlock = block = tags.DESCRIPTION.label;
                this.description += (this.description ? ' ' : '') + line.trim();
            } else if (!line.trim()) {
                currBlock = null;
            }

            if (isBreak) {
                break;
            }
        }
    }

    protected parseScope(): void {
        if (this.nameLine) {
            let scope = Utils.containsScope(this.nameLine);
            if (scope) {
                this.scope = <string>scope;
            }

            // TODO: perhaps this branch of control flow should
            // be present only in a class override method
            else {

                // this must be an inner class
                // or an @IsTest class
                this.scope = ApexDoc.PRIVATE;
            }
        }
    }

    protected setNameLine(nameLine: string, lineNum: number): void {
        // strip any annotations from the signature line
        // we'll capture those and display them separately
        this.nameLine = Utils.stripAnnotations(nameLine).trim();
        this.lineNum = lineNum;
        // if we're running the stub command
        // we don't care about scope
        if (!ApexDoc.isStub) {
            this.parseScope();
        }
    }
}

export default ApexModel;