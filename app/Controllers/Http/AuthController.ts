import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async index({ view }: HttpContextContract) {
    return view.render('login_page')
  }

  public async store({ request }: HttpContextContract) {
    const dto = schema.create({
      username: schema.string(),
      password: schema.string(),
    })
    const payload = await request.validate({
      schema: dto,
      messages: {
        required: 'The {{ field }} is required!',
      },
    })

    return payload
  }
}
