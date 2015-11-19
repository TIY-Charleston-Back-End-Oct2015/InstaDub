var Backbone = require('backbone');
var BeerModel = require('./model');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'beer',
  events: {
    'submit form': 'save'
  },
  template: _.template(tmpl.form),

  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function(options) {
      if(!this.model) {
        this.model = new BeerModel();
      }
      this.render();
        $('.col-md-4').html(this.el);

        var fileInput = document.querySelector('input[name="image"]');
        fileInput.addEventListener('change', function(e) {
            var file = fileInput.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#fileData').val(reader.result);
                $('#fileName').val(file.name);
            };
            reader.readAsDataURL(file);

        });

    },
    save: function(e) {
        e.preventDefault();
        e.stopPropagation();
        var beerName = this.$('input[name="name"]').val();
        var beerDescription = this.$('input[name="description"]').val();
        var beerVendor = this.$('input[name="vendor"]').val();
        var beerImage = this.$('input[type="file"]').val();
        var self = this;
        var fd = new FormData();
        fd.append('image', document.querySelectorAll('input[type="file"]')[0]);
        $.ajax({
          url: '/add-beer',
          contentType: false,
          processType: false,
          cache: false,
          data: fd,
          error: function(model, response) {
              alert('Failed to save resume. Please try again.');
          },
          success: function(model, response, options) {
              if(response.status == "failed") {
                  alert(response.message);
              } else {
                  alert('Added successfully.');

              }
          }
        });
        // this.model.save({
        //   contentType: 'multipart/form-data',
        //   data: {
        //       image: beerImage,
        //       name: beerName,
        //       description: beerDescription,
        //       vendor: beerVendor
        //   },
        //   error: function(model, response) {
        //       alert('Failed to save resume. Please try again.');
        //   },
        //   success: function(model, response, options) {
        //       if(response.status == "failed") {
        //           alert(response.message);
        //       } else {
        //           alert('Added successfully.');
        //
        //       }
        //   }
        // });
    }
})
