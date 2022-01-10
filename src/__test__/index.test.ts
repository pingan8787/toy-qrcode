import path from 'path';
import execa from 'execa';

// esno ./src/index.ts g -t=https://www.qq.com2 -d=12

test('simple test', async () => {
    const res = await execa('esno', [
        path.join(__dirname, '../index.ts'),
        'g',
        '-t',
        'https://www.qq.com',
        '-d',
        './dist/'
    ])

    expect(res.stdout).toEqual(`[toy-qrcode][generate] {"value":"https://www.qq.com","options":{"--":[],"type":"node","t":true,"d":true,"text":true,"dist":true}}`);
})