


document.addEventListener('DOMContentLoaded', () => {
    const elementIds = [
        'img1container', 'img2container', 'img3container', 'img4container', 'img5container',
        'img6container', 'img7container', 'img8container', 'img9container', 'img10container',
        'img11container', 'img12container', 'img13container', 'img14container', 'img15container',
        'img16container', 'img17container', 'img18container', 'img19container', 'img20container',
        'img21container', 'img22container', 'img23container', 'img24container','img25container'
    ];

    const videoClasses = [
        'YouTubeVid1', 'YouTubeVid2', 'YouTubeVid3', 'YouTubeVid4', 'YouTubeVid5'
    ];

    elementIds.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            makeDraggable(container, container);
        }
    });

    videoClasses.forEach(className => {
        const video = document.querySelector(`.${className}`);
        if (video) {
            makeDraggable(video, video);
        }
    });

    // Function to make an element draggable
    function makeDraggable(element, handle) {
        let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

        handle.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            mouseX = e.clientX;
            mouseY = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            posX = mouseX - e.clientX;
            posY = mouseY - e.clientY;
            mouseX = e.clientX;
            mouseY = e.clientY;
            element.style.top = (element.offsetTop - posY) + "px";
            element.style.left = (element.offsetLeft - posX) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function dragMouseDown(e) {
        e.preventDefault();
        element.style.zIndex = 1000; // Bring element to the top
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
});


document.addEventListener('DOMContentLoaded', (event) => {
    const triggerText2 = document.getElementById('trigger-text2');

    // Open chatroom.html when the CHATROOM text is clicked
    triggerText2.addEventListener('click', (e) => {
        window.location.href = 'chatroom.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const triggerText3 = document.getElementById('trigger-text3');

    // Open 5tay5afe.html when the MAIN PAGE text is clicked
    triggerText3.addEventListener('click', (e) => {
        window.location.href = '5tay5afe.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const triggerText4 = document.getElementById('trigger-text4');

    // Open personal_log.html when the PERSONAL LOG text is clicked
    triggerText4.addEventListener('click', (e) => {
        window.location.href = 'Personal log.html';
    });
});



