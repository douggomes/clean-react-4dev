export class UnexpectedError extends Error {
  constructor () {
    super('Não foi possível executar a sua solicitação. Tente novamente mais tarde')
    this.name = 'UnexpectedError'
  }
}
