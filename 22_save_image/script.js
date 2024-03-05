window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    if (context) {
        var img_1 = new Image();
        img_1.src = 'amsterdam.jpg';
        img_1.onload = function () {
            context.drawImage(img_1, 180, 35);
            var imageData = context.getImageData(180, 35, 550, 366);
            for (var i = 0; i < imageData.data.length; i += 4) {
                var average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) /
                    3;
                imageData.data[i] = average; // Red
                imageData.data[i + 1] = average; // Green
                imageData.data[i + 2] = average; // Blue
                // imageData.data[i + 3] = 50; // Alpha
            }
            context.putImageData(imageData, 180, 35);
            // Save canvas image as data url (default : PNG)
            var dataURL = canvas.toDataURL();
            var targetImgTag = document.getElementById('canvasImg');
            if (targetImgTag) {
                targetImgTag.src = dataURL;
            }
        };
    }
};
