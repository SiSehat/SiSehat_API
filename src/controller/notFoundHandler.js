const notFoundHandler = () => {
    return {
        status: 'fail',
        message: "request api tidak ditemukan"
    };
}

const rootHandler = () => {
    return {
        status: 'success',
        message: 'ini adalah bagian root / parent dari api, untuk melihat dokumentasi dapat menggunakan https://docs-si-sehat.vercel.app/#/'
    };
}

export {
    notFoundHandler,
    rootHandler
}