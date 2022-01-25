$(function() {

    var title = document.title,

        animSeq = [ "ЗАЧТИТЕ","МНЕ","МНЕ","САЙТ","САЙТ","ЗАЧТИТЕ"],

        animIndex = 0,

        titleIndex = 0;	

    function doInverseSpinZeroPitch() {

        var loadTitle = title.substring(0, titleIndex);

        if (titleIndex > title.length) {

            animIndex = 0;

            titleIndex = 0

        }

       if (animIndex > 5) {

            titleIndex++;

            animIndex = 0

        }

        document.title = animSeq[animIndex];

        animIndex++

    }

    window.setInterval(doInverseSpinZeroPitch, 500);

});