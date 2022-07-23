import path from 'path';
import { copyLibFiles } from '@builder.io/partytown/utils'

export const onPreBootstrap = async () => {
  copyLibFiles(path.join(__dirname, "..", "..", "public", "~partytown"));
};

export const pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    gtm_id: Joi.string().required().description(`GTM ID`),
    forward: Joi.array().items(Joi.string()).description(`forward`),
  })
}