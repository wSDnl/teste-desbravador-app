function CriaAlertaPrimaryPNotify(titulo, text) {
    new PNotify({
        title: titulo,
        text: text,
        icon: 'icon-info22',
        type: 'info'
    });
}

function CriaAlertaDangerPNotify(titulo, text) {
    new PNotify({
        title: titulo,
        text: text,
        icon: 'icon-blocked',
        type: 'error'
    });
}

function CriaAlertaSuccessPNotify(titulo, text) {
    new PNotify({
        title: titulo,
        text: text,
        icon: 'icon-checkmark3',
        type: 'success'
    });
}

function CriaAlertaWarningPNotify(titulo, text) {
    new PNotify({
        title: titulo,
        text: text,
        icon: 'icon-warning22'
    });
}