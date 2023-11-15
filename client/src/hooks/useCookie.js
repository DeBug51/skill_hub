import Cookie from "js-cookie"

const useCookie = () => {
    const setCookie = (name, value) => {
        Cookie.set(name, value, {
            expires: 2
        })
    }

    const getCookie = (name) => {
        return Cookie.get(name)
    }

    const removeCookie = (name) => {
        Cookie.remove()
    }

    return { setCookie, getCookie, removeCookie }
}

export { useCookie }