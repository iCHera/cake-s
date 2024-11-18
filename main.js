document.addEventListener("DOMContentLoaded", function () {
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const blocks = document.querySelectorAll(".section4-div-blocks > div");
    const totalBlocks = blocks.length;
    let currentIndex = 0;

    function showBlock(index) {
        blocks.forEach((block, i) => {
            block.classList.remove("active", "left", "right");

            if (i === index) {
                block.classList.add('active');
                block.style.opacity = '1';
                block.style.zoom = '1'; 
            }
            else if (i === (index - 1 + totalBlocks) % totalBlocks) {
                block.classList.add("left");
                block.style.opacity = '0.5';
                block.style.zoom = '0.9'; 
            } else if (i === (index + 1) % totalBlocks) {
                block.classList.add("right");
                block.style.opacity = '0.5';
                block.style.zoom = '0.9'; 
            }
        });
    }

    function updateBlocksPosition(direction) {
        const offset = 1300;
        const activeBlock = blocks[currentIndex];

        blocks.forEach((block, i) => {
            if (block === activeBlock) {
                block.style.transform = "translateX(0)";
            } else if (i === (currentIndex - 1 + totalBlocks) % totalBlocks) {
                if (direction === "left") {
                    block.style.transform = `translateX(-${offset}px)`;
                } else {
                    block.style.transform = `translateX(${offset}px)`;
                }
            } else if (i === (currentIndex + 1) % totalBlocks) {
                if (direction === "left") {
                    block.style.transform = `translateX(${offset}px)`;
                } else {
                    block.style.transform = `translateX(-${offset}px)`;
                }
            }
        });
    }

    leftButton.addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalBlocks - 1;
        showBlock(currentIndex);
        updateBlocksPosition("left");
    });

    rightButton.addEventListener("click", function () {
        currentIndex = (currentIndex < totalBlocks - 1) ? currentIndex + 1 : 0;
        showBlock(currentIndex);
        updateBlocksPosition("right");
    });

    showBlock(currentIndex);
    updateBlocksPosition("right");
});
