import { navigation } from "../../../../config"

const unprotectedPagesList = [
    navigation.authenticate.login,
    navigation.authenticate.forgetPassword,
    navigation.authenticate.signUp,
    navigation.notFound,
]

export const isUnprotected = (page: string): boolean => {
    const _isUnprotected = unprotectedPagesList.filter((val) => val == page)
    return _isUnprotected.length > 0
}
