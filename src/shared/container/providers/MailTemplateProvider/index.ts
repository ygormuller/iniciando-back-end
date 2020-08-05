import { container } from 'tsyringe';

import IMailTemplateProvider from './models/iMailTemplateProvider';

import HandlebarsMailTemplateProvider from './implementatios/HandlebarsMailTemplateProvider';

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
