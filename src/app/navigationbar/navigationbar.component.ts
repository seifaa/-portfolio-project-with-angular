import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor() { }
   clickOnNave() {
    // (click)="cookBacon()"
    
    // $( this ).css( "backgroundColor", "#1abc9c" );
    // $("li a").css( "color", "white" );

    //          $( this ).siblings(  ).css( "backgroundColor", "transparent" );
    
  }

  ngOnInit(): void {


    $("#mainNav li ").click(function () { 
      

      // e.target.style.background = "#1abc9c"
      //  $(this).css( "background-color", "red" );
      // $( this ).siblings(  ).css( "background", "yellow" );
      
      // $(this).toggleClass("active");
      // $(this).addClass("active");

      $( this ).css( "backgroundColor", "#1abc9c" );
      $("li a").css( "color", "white" );

               $( this ).siblings(  ).css( "backgroundColor", "transparent" );



      // $( this ).siblings(  ).css( "backgroundColor", "transparent" );
  

      // $( "button" ).css( "color", "white" );

  });
  

  $("li a").hover(function () { $( this ).css( "color", "green" );  } ,
  function(){$( this ).css( "color", "white" )});
  
  $(".a1").click(function () { 
      $( " #mainNav li  " ).css( "backgroundColor", "transparent" );
      
  });

  }



  
}
