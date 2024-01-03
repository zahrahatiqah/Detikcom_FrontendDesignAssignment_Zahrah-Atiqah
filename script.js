// JS CAROUSEL & THUMBNAIL

var splide = new Splide( '#main-slider', {
    pagination: false,
    type  : 'fade',
    rewind: true,
  } );
  
  splide.mount();
  
  var thumbnails = document.getElementsByClassName( 'thumbnail' );
  var current;
  
  
  for ( var i = 0; i < thumbnails.length; i++ ) {
    initThumbnail( thumbnails[ i ], i );
  }
  
  
  function initThumbnail( thumbnail, index ) {
    thumbnail.addEventListener( 'click', function () {
      splide.go( index );
    } );
  }
  
  
  splide.on( 'mounted move', function () {
    var thumbnail = thumbnails[ splide.index ];
  
  
    if ( thumbnail ) {
      if ( current ) {
        current.classList.remove( 'is-active' );
      }
  
  
      thumbnail.classList.add( 'is-active' );
      current = thumbnail;
    }
  } );
  
  splide.mount();

//JS NAVBAR
let navbar = document.querySelector('.navbar');

let navLinks = document.querySelectorAll('section .navbar a');

window.onscroll = () =>{


  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

