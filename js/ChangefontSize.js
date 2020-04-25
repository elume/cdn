function ChangefontSize(z) {
                var x = document.getElementById("text");
                var y = window
                    .getComputedStyle(x)
                    .fontSize;
                var fn = y[0];
                var sn = y[1];
                var fsn = fn + sn;
                fsn = Number(fsn);
                if (z == 1) {
                    fsn = fsn - 3;
                } else {
                    fsn = fsn + 3;
                }
                fsn = String(fsn) + 'px';
                x.style.fontSize = fsn;
            }