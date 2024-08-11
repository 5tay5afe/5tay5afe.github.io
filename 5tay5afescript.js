document.addEventListener('DOMContentLoaded', (event) => {
    const updateDiv = document.getElementById('update');
    const triggerText = document.getElementById('trigger-text');
    const popupNote = document.getElementById('popup-note');

    // Function to make the update div draggable
    function makeDraggable(element) {
        let posX = 0, posY = 0, mouseX = 0, mouseY = 0;
        
        element.onmousedown = dragMouseDown;

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

    // Make the update div draggable
    makeDraggable(updateDiv);

    // Toggle the popup note on click
    triggerText.addEventListener('click', (e) => {
        console.log('Trigger text clicked'); // Debugging
        if (popupNote.style.display === 'none' || popupNote.style.display === '') {
            popupNote.style.display = 'block';
            // Position the popup note near the trigger text relative to the update div
            const rect = triggerText.getBoundingClientRect();
            const updateRect = updateDiv.getBoundingClientRect();
            popupNote.style.top = `${rect.bottom - updateRect.top}px`; // Adjust position relative to update div
            popupNote.style.left = `${rect.left - updateRect.left + 65}px`;
        } else {
            popupNote.style.display = 'none';
        }
    });

    // Close the popup note if clicking outside of it
    document.addEventListener('click', (e) => {
        if (!popupNote.contains(e.target) && e.target !== triggerText) {
            popupNote.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const img1Container = document.getElementById('img1container');
    const img1 = img1Container.querySelector('.img1');
    const img2Container = document.getElementById('img2container');
    const img2 = img2Container.querySelector('.img2');
    const img3Container = document.getElementById('img3container');
    const img3 = img3Container.querySelector('.img3');
    const img4Container = document.getElementById('img4container');
    const img4 = img4Container.querySelector('.img4');
    const img5Container = document.getElementById('img5container');
    const img5 = img5Container.querySelector('.img5');
    const img6Container = document.getElementById('img6container');
    const img6 = img6Container.querySelector('.img6');
    const img7Container = document.getElementById('img7container');
    const img7 = img7Container.querySelector('.img7');
    const img8Container = document.getElementById('img8container');
    const img8 = img8Container.querySelector('.img8');
    const img9Container = document.getElementById('img9container');
    const img9 = img9Container.querySelector('.img9');
    const img10Container = document.getElementById('img10container');
    const img10 = img10Container.querySelector('.img10');
    const img11Container = document.getElementById('img11container');
    const img11 = img11Container.querySelector('.img11');
    const img12Container = document.getElementById('img12container');
    const img12 = img12Container.querySelector('.img12');
    const img13Container = document.getElementById('img13container');
    const img13 = img13Container.querySelector('.img13');
    const img14Container = document.getElementById('img14container');
    const img14 = img14Container.querySelector('.img14');
    const img15Container = document.getElementById('img15container');
    const img15 = img15Container.querySelector('.img15');
    const img16Container = document.getElementById('img16container');
    const img16 = img16Container.querySelector('.img16');
    const img17Container = document.getElementById('img17container');
    const img17 = img17Container.querySelector('.img17');
    const img18Container = document.getElementById('img18container');
    const img18 = img18Container.querySelector('.img18');
    const img19Container = document.getElementById('img19container');
    const img19 = img19Container.querySelector('.img19');
    const img20Container = document.getElementById('img20container');
    const img20 = img20Container.querySelector('.img20');
    const youTubeVid1 = document.querySelector('.YouTubeVid1');
    const youTubeVid2 = document.querySelector('.YouTubeVid2');
    const youTubeVid3 = document.querySelector('.YouTubeVid3');
    const youTubeVid4 = document.querySelector('.YouTubeVid4');
    const youTubeVid5 = document.querySelector('.YouTubeVid5');

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

    // Make the container and YouTube video divs draggable
    makeDraggable(img1Container, img1Container);
    makeDraggable(img2Container, img2Container);
    makeDraggable(img3Container, img3Container);
    makeDraggable(img4Container, img4Container);
    makeDraggable(img5Container, img5Container);
    makeDraggable(img6Container, img6Container);
    makeDraggable(img7Container, img7Container);
    makeDraggable(img8Container, img8Container);
    makeDraggable(img9Container, img9Container);
    makeDraggable(img10Container, img10Container);
    makeDraggable(img11Container, img11Container);
    makeDraggable(img12Container, img12Container);
    makeDraggable(img13Container, img13Container);
    makeDraggable(img14Container, img14Container);
    makeDraggable(img15Container, img15Container);
    makeDraggable(img16Container, img16Container);
    makeDraggable(img17Container, img17Container);
    makeDraggable(img18Container, img18Container);
    makeDraggable(img19Container, img19Container);
    makeDraggable(img20Container, img20Container);
    makeDraggable(youTubeVid1, youTubeVid1);
    makeDraggable(youTubeVid2, youTubeVid2);
    makeDraggable(youTubeVid3, youTubeVid3);
    makeDraggable(youTubeVid4, youTubeVid4);
    makeDraggable(youTubeVid5, youTubeVid5);
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



