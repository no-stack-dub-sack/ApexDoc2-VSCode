import * as tags from '../common/tags';
import { Option } from '../common/Utils';
import {
    CompletionItem,
    CompletionItemKind,
    CompletionItemProvider,
    SnippetString,
    Disposable,
    languages,
    Position,
    TextDocument,
    MarkdownString,
    } from 'vscode';

class ApexDocTagCompletionItem extends CompletionItem {
    constructor(tag: tags.IApexDoc2Tag) {
        let snippetString: Option<SnippetString>;
        let kind = CompletionItemKind.Text;
        let tagName = tag.label.slice(1);

        if (tag.snippet) {
            snippetString = new SnippetString(tag.snippet);
            kind = CompletionItemKind.Snippet;
        }

        super(tagName, kind);
        this.label = tagName;
        this.detail = `@${tagName} ApexDoc2 Tag`;
        this.insertText = snippetString || tagName;
        this.documentation = new MarkdownString(tag.documentation);
    }
}

class ApexDocTagCompletionProvider implements CompletionItemProvider {
    public provideCompletionItems(
        document: TextDocument,
        position: Position
        ): Promise<Option<CompletionItem[]>>  {

        const line = document.lineAt(position.line).text.trim();

        if (!/^\*\s+@$/.test(line)) {
            return Promise.resolve(undefined);
        }

        const tagCompletionItems = Object.values(tags)
            .map(tag => new ApexDocTagCompletionItem(tag));

        return Promise.resolve(tagCompletionItems);
    }
}

export default function docTagCompletion(): Disposable {
    return languages.registerCompletionItemProvider('apex', new ApexDocTagCompletionProvider(), '@');
}