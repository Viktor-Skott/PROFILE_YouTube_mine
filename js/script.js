function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  let elements2 = document.querySelectorAll('.element-animation-2');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  for (let elm of elements2) {
    observer.observe(elm);
  }