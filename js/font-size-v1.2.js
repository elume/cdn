function ChangefontSize(z) {
    var x = document.getElementById("text");
    var cf = document.getElementById("fontsizenow");
    var cfs = window
        .getComputedStyle(cf)
        .fontSize;
    var y = window
        .getComputedStyle(x)
        .fontSize;
    var fn = y[0];
    var sn = y[1];
    var fsn = fn + sn;
    fsn = Number(fsn);
    var fa = cfs[0];
    var fb = cfs[1];
    var ff = fa + fb;
    ff = Number(ff);
    while (ff > 10 && ff < 25) {
        if (z == 1) {
            fsn = fsn - 3;
        } else {
            fsn = fsn + 3;
        }
        fsn = String(fsn) + 'px';
        x.style.fontSize = fsn;
        break;
    }
    while (ff > 10 && ff < 50) {
        if (z == 1) {
            fsn = fsn - 3;
        }
        fsn = String(fsn) + 'px';
        x.style.fontSize = fsn;
        break;
    }
    while (ff > 0 && ff < 25) {
        if (z == 0) {
            fsn = fsn + 3;
        }
        fsn = String(fsn) + 'px';
        x.style.fontSize = fsn;
        break;
    }
}