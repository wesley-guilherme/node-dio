const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramente (1 -QRCODE ou 2- PASSWORD",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true,
    },
];