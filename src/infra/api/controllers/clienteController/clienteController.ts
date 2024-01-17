import * as Hapi from '@hapi/hapi';
import Logger from '../../../../plugins/logger.plugin';
import { ClienteManagerUseCase } from '../../../../domain/usecases/cliente/clienteManager';


export default class ClienteController {
    public static async register(server: Hapi.Server): Promise<void> {

        server.route({
            method: 'GET',
            path: '/clientes',
            handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<any> => {
                try {
                    // Teste de rota cliente + repository
                    const clientes = await ClienteManagerUseCase.buscarTodosClientes();
                    //Deletar tudo antes disso


                    return h.response(clientes);
                } catch (error) {
                    Logger.error(`Error in GET /clientes: ${error.message}`);
                    return h.response({ error: 'Internal Server Error' }).code(500);
                }
            },
        });
    }
}