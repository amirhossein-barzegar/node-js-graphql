const resolvers = {
    Query: {
        user: (_, args) => {
            return {
                id: 1,
                firstName: 'amirhossein',
                lastName: 'barzegar',
                email: 'amir@gmail.com',
                job: 'developer',
                age: 18,
            }
        }
    }
}

export default resolvers