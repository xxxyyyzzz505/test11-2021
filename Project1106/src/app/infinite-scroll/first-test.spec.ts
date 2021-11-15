describe('my first test', ()=> {
    let sut; //system under test

    beforeEach(() => {
        sut = {}
    })

    it('should be true if ture', () => {
        //arange
        sut.a = false;

        //act
        sut.a = true;

        //assert
        expect(sut.a).toBe(true);
    }) 
})

'user service getUser method should retrieve the correct user'