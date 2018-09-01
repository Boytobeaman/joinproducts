'use strict';

/**
 * Commonproduct.js controller
 *
 * @description: A set of functions called "actions" for managing `Commonproduct`.
 */

module.exports = {

  /**
   * Retrieve commonproduct records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.commonproduct.search(ctx.query);
    } else {
      return strapi.services.commonproduct.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a commonproduct record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.commonproduct.fetch(ctx.params);
  },

  /**
   * Count commonproduct records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.commonproduct.count(ctx.query);
  },

  /**
   * Create a/an commonproduct record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.commonproduct.add(ctx.request.body);
  },

  /**
   * Update a/an commonproduct record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.commonproduct.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an commonproduct record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.commonproduct.remove(ctx.params);
  }
};
