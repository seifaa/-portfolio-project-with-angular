import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
h = "f"
  constructor() { 

  }

  ngOnInit(): void {


    $(".inputName").keyup(function(){ 

      if(  $(this).val())
      {
          $(".checkname").html("");
      
          $(".labelN").css({"opacity": "1" , "top":"0"}); 
         
      
      
      
      }
      else{
          $(".labelN").css({"opacity": "0" , "top":"2em"});  
      
      }
      });  
      $(".inputEmail").keyup(function(){
          var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      
          if(  $(this).val())
          {
              $(".emailalet").html("");
      
      
              $(".labelE").css({"opacity": "1" , "top":"0"});  
              if (!regex.test(this.value)) {
                  $(".emailalet").html("<ul><li>Not a valid email address</li></ul>   ");
      
              } 
              else{
                  $(".emailalet").html("");
      
              }
          
          
          }
          else{
              $(".labelE").css({"opacity": "0" , "top":"2em"});  
              $(".emailalet").html("");
      
          
          }
          }); 
          $(".inputPhone").keyup(function(){  
              if(  $(this).val())
              {
                  $(".checkphone").html("");
      
                  $(".labelP").css({"opacity": "1" , "top":"0"});  
              
              
              }
              else{
                  $(".labelP").css({"opacity": "0" , "top":"2em"});  
              
              }
              }); 
              $(".textareaMessage").keyup(function(){  
                  if(  $(this).val())
                  {
                      $(".labelM").css({"opacity": "1" , "top":"0"});  
                  
                  
                  }
                  else{
                      $(".labelM").css({"opacity": "0" , "top":"2em"});  
                  
                  }
                  }); 
      $(".send").click(function(){
      if(!$(".inputName").val()){
          $(".checkname").html("<ul><li>Please enter your your name. </li></ul>   ");
      }
      else{
          $(".checkname").html("");
      
      }
      if(!$(".inputPhone").val()){
          $(".checkphone").html("<ul><li>Please enter your phone number.    </li></ul>   ");
      }
      else{
          $(".checkphone").html("");
      
      }
          if(!$(".inputEmail").val()){
              $(".emailalet").html("<ul><li>Please enter your email address.        </li></ul>   ");
          }
          else{
              $(".emailalet").html("");
      
          }
                  
      
      })


  }

}
