'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../../src/app.js');
const mockRequest = supergoose(server);


describe('App Integration Tests: ', () => {

    it('Should handle the /coinflip route', async () => {

        let res = await mockRequest.get('/coinflip')

        expect(res.status).toEqual(200);

    });
});
