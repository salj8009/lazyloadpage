const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImagen = (entry) => {
    const container = entry.target;
    const imagen = container;
    const url = container.dataset.src;
    
    imagen.src = url;
    //debugger;
   
    observer.unobserve(container);
}

const observer = new IntersectionObserver( (entries) => {
    entries.filter(isIntersecting).forEach(loadImagen);
});

export const registerImage = (imagen) => {
    observer.observe(imagen);
};