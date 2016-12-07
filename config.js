/**
 * Customizations are overrides to be applied to the application as it's loaded.
 * These can be anything including bug fixes, improvements, or new features. Each
 * customization is loaded and activated depending on the user's setting. You may
 * disable any customizations under the 'Settings > Additional Customizations'
 * menu.
 *
 * For the sake of consistency, classes should be defined in the `Customization` namespace.
 * Overrides should be defined in the `Override` namespace.
 *
 * Configurations can be defined with the following parameters:
 * - text : String (optional) - friendly display name for the customization
 * - description : String (optional) - short description about the customization
 * - type : String (required) - can be one of the following: bug|improvement|feature
 * - force : Boolean (optional) - if `true`, this customization will always be enabled
 * - requires: String/String[] - list of dependency customizations to be loaded prior; reference the customization name, not a class name
 * - requiresOverride: String/String[] - list of dependency classes that need to be loaded prior
 * - fn : Function (required) - mutually exclusive to `scriptname`, this contains the heart of the customization
 * - scriptname : String (required) - mutually exclusive to `fn`, this loads a remote customization (eg. reply-draft.js)
 */
var customizations = {
    'error-reporting': {
        text:        'Disable Error Reporting',
        description: 'Prevents application errors from being reported',
        type:        'feature',
        fn:          function () {
            Ext.define('Override.error.Manager', {}, function () {
                Ext.error.Manager.setActive({onerror: false, exterror: false});
            });
        }
    },

    'utils': {
        force:      true,
        scriptname: 'utils.js'
    },

    'configurator': {
        force:      true,
        requires:   ['utils'],
        scriptname: 'configurator.js'
    },

    'update-notification': {
        force: true,
        scriptname: 'update-notification.js'
    }
};
