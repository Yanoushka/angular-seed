import { PreventNullPipe } from './prevent-null.pipe';

describe('PreventNullPipe', () => {
    it('create an instance', () => {
        const pipe = new PreventNullPipe();
        expect(pipe).toBeTruthy();
    });
});
