// copy over older code of the original Katslovely js project

// ------ Sparkle trail effect ------
window.addEventListener('mousemove', function(e) {
    let arr = [1,0.9,0.8,0.5,0.2];// sparkle density

    arr.forEach(function(i){
        let x =(1-i)* 15;// change the rail cluster
        let spark = document.createElement('div');
        // show spark on the possition of the sursor location and dispear after a certain time
        spark.className = 'spark';
        spark.style.left = e.clientX + Math.round(Math.random() * x - x / 2)+ 'px';
        spark.style.top = e.clientY + Math.round(Math.random() * x - x / 2)+ 'px';
       
        document.body.appendChild(spark);
        window.setTimeout(function() {
            document.body.removeChild(spark);
        },Math.round(Math.random()* i* 600)); // spark removed after 600 milliseconds
    });
},false);

// ---- end of sparkle trail effect  code------

//---- Masonry layout for the works section ----
    var $grid = $('.grid').imagesLoaded(function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer'
  });
});
// --- end of masonry layout code ----