import GeneratorUtils from '../GeneratorUtils';
import MarkupGenerator from './MarkupGenerator';
import { TopLevelModel } from '../../../common/models';

class TopLevelMarkupGenerator extends MarkupGenerator<TopLevelModel> {
    protected constructor(model: TopLevelModel, models: Map<string, TopLevelModel>) {
        super(model, models);
    }

    public static generate(model: TopLevelModel, models: Map<string, TopLevelModel>, additionalContent = ''): string {
        const generator = new TopLevelMarkupGenerator(model, models);

        let markup = '';

        // add any additional content passed in from the caller. currently, only
        // use case is the values table used when documenting class-level enums
        markup += generator.description('class-description');
        markup += generator.signature('method');
        markup += additionalContent;
        markup += generator.deprecated();
        markup += generator.see();
        markup += generator.author();
        markup += generator.since();
        markup += generator.example();

        markup =
            `<div class="class-container">
                ${markup}
            </div>`;

        return markup;
    }

    protected markupTemplate(label: string, contents: string, titleClass = '', contentClass = 'class-subtitle-description', tag = 'div') {
        titleClass = titleClass ? `class-subtitle ${titleClass}` : 'class-subtitle';
        return super.markupTemplate(label, contents, titleClass, contentClass, tag);
    }

    protected author() {
        if (!this.model.author) {
            return '';
        }

        return `<br/>${GeneratorUtils.encodeText(this.model.author, true, this.models)}`;
    }

    protected since() {
        if (!this.model.since) {
            return '';
        }

        return `<br/>${GeneratorUtils.encodeText(this.model.since, true, this.models)}`;
    }
}

export default TopLevelMarkupGenerator;