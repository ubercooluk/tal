define(
    "sampleapp/appui/components/helloworld",
    [
      "antie/widgets/component",
      "antie/widgets/label",
      "antie/widgets/button",
      
    ],
    function (Component, Button , Label) {
  
      return Component.extend({
        init: function init () {
            init.base.call(this, "helloworld");

            var sample = new Label("sampleid", "Sample label 123");
            this.appendChildWidget(sample);


         // var desc = new Button();
        //   desc.addEventListener('select', function (evt){ 
        //     console.log('selected');
        // });
        // //  desc.appendChildWidget(new Label("Hello world Button"));
        //   this.appendChildWidget(desc);
      
        },
        
  
        
      });
    }
  );
  