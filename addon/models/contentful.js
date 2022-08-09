import Model, { attr } from '@ember-data/model';

export default class ContentfulModel extends Model {
  @attr('string') contentType;
  @attr('date') createdAt;
  @attr('date') updatedAt;
}
