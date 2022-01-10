import path from 'path';
import { execa } from 'execa';

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

    console.log('[res]', res)

    expect(res.stdout).toMatchInlineSnapshot(`
        "[toy-qrcode][generate]"
    `)
})