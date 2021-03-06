import { IUser } from 'models/Users'

import UsersRepository, { IPropsCreateUser } from 'repositories/UsersRepository'

class AccountsService {
    createAccount = async ({
        email,
        password,
        username,
    }: IPropsCreateUser): Promise<IUser> => {
        const user = await UsersRepository.create({ email, password, username })

        return user
    }
}

export default new AccountsService()
