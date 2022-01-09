import cac from 'cac';
import packageJSON from '../package.json';

const cli = cac('toy-qrcode');

cli
    .command('g <content>', 'Generate a qrcode image.')
    .alias('generate')
    .example('toy-qrcode g')
    .option('-t, --text', 'Setting source content')
    .option('-d, --dist', 'Setting source content')
    .action((value, options) => {
        console.log('[toy-qrcode][generate]',JSON.stringify({value, options}));
    })

cli.option('--type <type>', 'Choose a project type', {
    default: 'node',
})

cli.version(packageJSON.version);

const parsed = cli.parse();