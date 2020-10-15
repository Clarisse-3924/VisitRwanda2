$(document).ready(function() {
       $("#book").click(function(){
         $("#hiking").show();

       });
       $("#b").click(function(){
         $("#hiking").hide();

       });
      });

      $(document).ready(function() {
        $("#book1").click(function(){
          $("#hotel").show();
 
        });
        
        $("#w").click(function(){
          $("#hotel").hide();
 
        });
       });

       
       $(document).ready(function() {
        $("#book2").click(function(){
          $("#culture").show();
 
        });
        $("#a").click(function(){
          $("#culture").hide();
 
        });
       });

       $(document).ready(function() {
        $("#book3").click(function(){
          $("#historical").show();
 
        });
        $("#c").click(function(){
          $("#historical").hide();
 
        });
       });

      /* $(document).ready(function(){
        $(".hike1").hover(function(){
          $("#hike1").slideDown("quick",function ()
          {
          });
        });
      });

      $(document).ready(function(){
        $(".culture1").hover(function(){
          $("#culture1").slideDown("quick",function ()
          {
          });
        });
      });

      $(document).ready(function(){
        $(".history1").hover(function(){
          $("#history1").slideDown("quick",function ()
          {
          });
        });
      });*/


      $(document).ready(function() {
        $(".form").submit(function(event) {
            var name = $("input#name").val();
            var email = $("input#email").val();
            var hotel = $("input#text").val();
            var room = $("input#room").val();
            var nVisitors = $("input#number").val();
            var aDate = $("input#date").val();
            var aTime = $("input#time").val();
            var ddate = $("input#date1").val();
            var dTime = $("input#time1").val();
            var pick = $("input#radio").val();
            var request = $("input#area").val();
            $("#Name").text(name);
            $("#Email").text(email);
            $("#Hotel").text(hotel);
            $("#Type").text(room);
            $("#Visitors").text(nVisitors);
            $("#Date").text(aDate);
            $("#Time").text(aTime);
            $("#Date1").text(ddate);
            $("#Time1").text(dTime);
            $("#Pick").text(pick);
            $("#Request").text(request);

            $(".check").show();
    
            event.preventDefault();
        });
    });

    $(document).ready(function() {
      $("#confirm").click(function(){
        $("#hotel").hide();
        alert("Thank you for Booking and choosing our hotel")
      });
      
     });
     $(document).ready(function() {
      $("#cancel").click(function(){
        $("#hotel").hide();
      });
      
     });

    $(document).ready(function() {
      $(".hikeform").submit(function(event){
        function Nationality() {
          var nationality=document.getElementById("culiture").value;
          return parseInt(nationality);
        }
        function Transport() {
          var transport=document.getElementById("delivery").value;
          return parseInt(transport);
        }
        function nVisitors() {
          var number = document.getElementById("visit").value;
          return parseInt(number);
        }
        function myOrder(Nationality, Transport, nVisitors) {
          this.myNationality = Nationality;
          this.myTransport = Transport;
          this.myVisitors = nVisitors;
        }
         var inputs = new myOrder(Nationality(), Transport(), nVisitors());
       
        var totalCost =(inputs.myNationality +inputs.myTransport) * inputs.myVisitors;
           $(".Verfy").show();
         

            
            document.getElementById("nation").innerHTML=inputs.myNationality + ("Rwf");
            document.getElementById("trans").innerHTML=inputs.myTransport + (" Rwf");
            document.getElementById("d").innerHTML=inputs.myVisitors;
            document.getElementById("total").innerHTML=totalCost+(" Rwf");
       
        event.preventDefault();
      });
    });
    $(document).ready(function() {
      $("#conf").click(function(){
        $("#hiking").hide();
        alert("Thank you for Booking")
      });
      
     });
     $(document).ready(function() {
      $("#cance").click(function(){
        $("#hiking").hide();
      });
      
     });


     $(document).ready(function() {
      $(".histoform").submit(function(event){  
        function National() {
          var national=document.getElementById("histori").value;
        
          return parseInt(national);
        }
        function Transport1() {
          var transport1=document.getElementById("transport").value;
          return parseInt(transport1);
        }
        function nvisit() {
          var number2 = document.getElementById("num").value;
          return parseInt(number2);
        }
        
        function book(National, Transport1, nvisit) {
          this.myNational = National;
          this.myTransport1 = Transport1;
          this.myvisit = nvisit;
        }
       
        var input = new book(National(), Transport1(), nvisit());
        
        var total =(input.myNational +input.myTransport1) * input.myvisit;
           $(".confirm").show();
         
            document.getElementById("natio").innerHTML=input.myNational + ("Rwf");
            document.getElementById("tran").innerHTML=input.myTransport1 + (" Rwf");
            document.getElementById("is").innerHTML=input.myvisit;
            document.getElementById("total1").innerHTML=total+(" Rwf");
        
        event.preventDefault();
      });
    });
    $(document).ready(function() {
      $("#con").click(function(){
        $("#historical").hide();
        alert("Thank you for Booking")
      });
      
     });
     $(document).ready(function() {
      $("#canc").click(function(){
        $("#historical").hide();
      });
      
     });

   

     $(document).ready(function() {
      $(".cultureform").submit(function(event){  
        function National1() {
          var national1=document.getElementById("culture2").value;
        
          return parseInt(national1);
        }
        function Transport2() {
          var transport2=document.getElementById("transport1").value;
          return parseInt(transport2);
        }
        function nvisit1() {
          var number2 = document.getElementById("numb").value;
          return parseInt(number2);
        }
        
        function book1(National1, Transport2, nvisit1) {
          this.myNational1 = National1;
          this.myTransport2 = Transport2;
          this.myvisit1 = nvisit1;
        }
       
        var userinput = new book1(National1(), Transport2(), nvisit1());
        
        var tCost =(userinput.myNational1 +userinput.myTransport2) * userinput.myvisit1;
           $(".Verfy1").show();
         
            document.getElementById("nation1").innerHTML=userinput.myNational1 + ("Rwf");
            document.getElementById("trans1").innerHTML=userinput.myTransport2 + (" Rwf");
            document.getElementById("d1").innerHTML=userinput.myvisit1;
            document.getElementById("total2").innerHTML=tCost+(" Rwf");
        
        event.preventDefault();
      });
    });
    $(document).ready(function() {
      $("#conf1").click(function(){
        $("#culture").hide();
        alert("Thank you for Booking")
      });
      
     });
     $(document).ready(function() {
      $("#cance1").click(function(){
        $("#culture").hide();
      });
      
     });

   
       
       