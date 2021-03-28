//upload image

let uploadForm = document.querySelector('#upload-form');
uploadForm.addEventListener('submit' , function() {
  let imageFile = document.querySelector('#customFile').files[0];
  let imageName = imageFile.name;

  let reader = new FileReader();
  reader.readAsDataURL(imageFile);

  reader.addEventListener('load', function(){
    if(this.result && localStorage) {
        let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
        imagesList.push(this.result); //got images to images list now send them to localStorage
        localStorage.setItem('images', JSON.stringify(imagesList));
    }
  });
displayImage();
});

//display image 

let displayImage = () => {
    let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
    if(imagesList.length !== 0) {
      let cardImages = '';
      for(let image of imagesList) {
          cardImages += ` <div class="col-md-3 mb-3 m-auto">
                              <div class="card img-card">
                                <img src="${image}" class="img-fluid" alt="">
                                    <div class="card-body">
                                    <h2 class="card-title">Mini Me</h2>
                                    <p class="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aspernatur</p>
                                  </div>
                              </div> 
                            </div>`;
                          
    }
    document.querySelector('#card-row').innerHTML = cardImages;
}
};
displayImage();

//remove all images from
  let removeBtn = document.querySelector('#remove-btn');
  removeBtn.addEventListener('click',function(){
    localStorage.removeItem('images');
    displayImage();
  })