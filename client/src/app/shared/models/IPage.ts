export interface IPage {
  id?: number;
  type: string;
  name: string;
  url: string;
  dateOfUpdate: Date | string;
  dateOfCreation: Date | string;
  content_en: string;
  content_nl: string;
}
