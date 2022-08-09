import Model, { attr } from '@ember-data/model';

export default class ContentfulAssetModel extends Model {
  @attr file;
  @attr('string') title;
  @attr('string') description;
}
