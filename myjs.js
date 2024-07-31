    let close = document.getElementById('close');
    let txt_1 = document.getElementById('txt-1');
    let img = document.getElementById('img');
    let container = document.getElementById('container');
    img.onclick = function(){
        about.style.display = 'none';
        img.style.width = '340px';
        img.style.height = '340px';
        img.style.borderRadius = '0%';
        img.style.top = '130px';
        img.style.left = '2px';
        img.style.zIndex = '100';
        img.style.transition = "all 1.5s";
        img.style.boxShadow = '2px 2px 8px black'
        img.style.border = 'none';
        close.style.transition = 'all 2s';
        //close.style.transitionDelay = '5s';
        close.style.display = 'inline';
        
        //var closse = document.createElement('div');
        //closse.className = 'close';
        //closse.textContent = 'X';
        //closse.style.zIndex = '5';
        //document.body.appendChild('closse')
    };
    
    close.onclick = function(){
        about.style.display = 'block';
        img.style.transition = 'all 1.5s';
        img.style.border = '2px solid white';
        img.style.top = '-25px';
        img.style.width = '130px';
        img.style.left = '100px';
        img.style.height = '130px';
        img.style.borderRadius = '50%';
        close.style.display = 'none';
        
    }
    
    //container.appendChild('close');
    let li1 = document.getElementById('li1');
    let li2 =  document.getElementById('li2');
    let li3 = document.getElementById('li3');
    let li4 = document.getElementById('li4');
    let a = document.getElementById('a');
    let icon = document.getElementById('icon-img');
    let btn = document.getElementById('btn');
    let text = document.getElementById('text');
    let txt_2 = document.getElementById('txt-2');
    let menubtn = document.getElementById('menubtn');
    let slider = document.getElementById('slider');
    let about = document.getElementById('about');
    menubtn.onclick = function(){
        //slider.style.animation = "slider 2s linear";
        html.style.fontWeight = 'bold';
        slider.style.transition = 'left, display, 2s';
        slider.style.left = '500px';
    }
    
    html = document.getElementById('html');
    css = document.getElementById('css');
    js = document.getElementById('js');
    py = document.getElementById('py');
    let icons = document.getElementById('icon-img');
    
    let ul = document.getElementById('ul');
    css.onclick = function(){
        css.style.transition = 'all 0.5s';
        css.style.color = 'blue';
        css.style.borderBottom = '2px solid blue';
        css.style.fontWeight = 'bold';
        html.style.color = 'black';
        html.style.fontWeight = '';
        html.style.borderBottom = 'none';
        js.style.color = 'black';
        js.style.borderBottom = 'none';
        js.style.fontWeight = '';
        py.style.color = 'black';
        py.style.borderBottom = 'none';
        py.style.fontWeight = '';
        
        txt_1.textContent = '~CSS';
        txt_2.classList.toggle('txt-22');
        a.classList.toggle('aa');
        //icon.style.border = '2px solid red';
        icons.src = '/storage/emulated/0/Download/CSS3_logo_and_wordmark.svg.png';
        txt_2.textContent = "Transforming designs into stunning visual experience with CSS 3 and delivering polished, performant, and maintainable stylesheets that bring interface to life.";
        li1.textContent = "Responsive design and media queries.";
        li2.textContent = "CSS frameworks like Bootstrap and Tailwind.";
        li3.textContent = "Advanced selectors, layouts and animations";
        ul.classList.toggle('lists');
    }
    
    js.onclick = function(){
        js.style.transition = 'all 0.5s';
        js.style.color = 'blue';
        js.style.borderBottom = '2px solid blue';
        js.style.fontWeight = 'bold';
        html.style.color = 'black';
        html.style.borderBottom = 'none';
        html.style.fontWeight = '';
        css.style.color = 'black';
        css.style.borderBottom = 'none';
        css.style.fontWeight = '';
        py.style.color = 'black';
        py.style.borderBottom = 'none';
        py.style.fontWeight = '';
        
        txt_1.textContent = '~JS';
        txt_2.classList.toggle('txt-22');
        a.classList.toggle('aa');
        icon.src = "/storage/emulated/0/Download/images (1).png";
        txt_2.textContent = "Building dynamic, interactive and scalable web applications with javascript. Crafting robust, responsive and user-friendly experiences that drive engagement and conversation";
        li1.textContent = "DOM manupilation and event handling.";
        li2.textContent = "Optimizing performance, debugging and cross browser compatibility.";
        li3.textContent = "Statement management and API integration.";
        ul.classList.toggle('lists');
    }
    
    html.onclick = function(){
        html.style.transition = 'all 0.5s';
        html.style.color = 'blue';
        html.style.borderBottom = '2px solid blue';
        html.style.fontWeight = 'bold';
        css.style.color = 'black';
        css.style.borderBottom = 'none';
        css.style.fontWeight = '';
        js.style.color = 'black';
        js.style.borderBottom = 'none';
        js.style.fontWeight = '';
        py.style.color = 'black';
        py.style.borderBottom = 'none';
        py.style.fontWeight = '';
        
        txt_1.textContent = '~HTML';
        txt_2.classList.toggle('txt-22');
        a.classList.toggle('aa');
        icon.src = "/storage/emulated/0/Download/images.png";
        li1.textContent = "Structuring content with HTML elements and attributes";
        li2.textContent = "Building responsive layouts with css grid and flex";
        li3.textContent = "Optimizing for search engines with SEO friendly markup";
        ul.classList.toggle('lists');
    }
    
    py.onclick = function(){
        py.style.transition = 'all 0.5s';
        py.style.color = 'blue';
        py.style.fontWeight = 'bold';
        py.style.borderBottom = '2px solid blue';
        html.style.color = 'black';
        html.style.borderBottom = 'none';
        html.style.fontWeight = '';
        css.style.color = 'black';
        css.style.borderBottom = 'none';
        css.style.fontWeight = '';
        js.style.color = 'black';
        js.style.borderBottom = 'none';
        js.style.fontWeight = '';
        
        txt_1.textContent = '~Python';
        txt_2.classList.toggle('txt-22');
        a.classList.toggle('aa');
        icon.src = "/storage/emulated/0/Download/images (2).png";
        txt_2.textContent = "Building scalable, efficient and data driven solutions with python and crafting innovative solutions that drive bussiness value and insight.";
        li1.textContent = "Writing clean, readable and modular code with python 3.x";
        li2.textContent = "Building web applications with Django.";
        li3.textContent = "Leveraging various modules and libraries.";
        ul.classList.toggle('lists');
    }
    
    let element = document.createElement('div');
    element.className = 'ex';
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.backgroundColor = 'blue';
    
    //document.body.appendChild('element');
    
    //screen.orientation.lock('portrait');
    
    window.addEventListener('orientationchange', function(){
        if(window.orientaion !== 0){
            window.orientaion == 0;
            console.log('changed')
        }
    })