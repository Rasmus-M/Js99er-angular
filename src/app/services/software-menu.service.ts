import {Injectable} from '@angular/core';
import {Software} from '../classes/software';
import {Observable} from 'rxjs/Observable';
import {ModuleService} from './module.service';
import {Subject} from 'rxjs/index';

@Injectable()
export class SoftwareMenuService {

    static MENU: any = [
        {
            type: 'ITEM',
            name: 'TI Basic'
        },
        {
            type: 'ITEM',
            name: 'TI Extended Basic',
            url: 'software/xb.json'
        },
        {
            type: 'ITEM',
            name: 'Editor/Assembler',
            url: 'software/editor-assembler.json'
        },
        {
            type: 'DIVIDER'
        },
        {
            type: 'SUBMENU',
            name: 'Apps',
            items: [
                {
                    type: 'ITEM',
                    name: 'Mini Memory',
                    url: 'software/minimem.json'
                },
                {
                    type: 'ITEM',
                    name: 'Supercart',
                    url: 'software/supercart.json'
                },
                {
                    type: 'ITEM',
                    name: 'Editor Assembler II',
                    url: 'software/ea2.json'
                },
                {
                    type: 'ITEM',
                    name: 'RXB 2015',
                    url: 'software/RXB2015.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Cortex Basic',
                    url: 'software/cortexbasic.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Cortex Basic 80',
                    url: 'software/cortex_basic_80.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'TurboForth',
                    url: 'software/turboforth.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'fbForth',
                    url: 'software/fbForth200.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'TI Workshop',
                    url: 'software/ti-workshop.json'
                },
                {
                    type: 'ITEM',
                    name: 'XB 2.7 Suite',
                    url: 'software/xb27suite2.json'
                },
                {
                    type: 'ITEM',
                    name: 'Jumpstart for xas99',
                    url: 'software/jumpstart.rpk'
                }
            ]
        },
        {
            type: 'DIVIDER'
        },
        {
            type: 'SUBMENU',
            name: 'Games',
            items: [
                {
                    type: 'ITEM',
                    name: 'Parsec',
                    url: 'software/parsec.json'
                },
                {
                    type: 'ITEM',
                    name: 'TI Invaders',
                    url: 'software/ti-invaders.json'
                },
                {
                    type: 'ITEM',
                    name: 'Q-Bert',
                    url: 'software/qbert.json'
                },
                {
                    type: 'ITEM',
                    name: 'Atarisoft compilation',
                    url: 'software/atarisoft-multicart.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Game cart 1 (512K)',
                    url: 'software/gamecart.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Game cart 2 (512K)',
                    url: 'software/gamecart2.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Game cart 3 (512K)',
                    url: 'software/gamecart3.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Rasmus 8-in-1 game cart',
                    url: 'software/rasmus-8in1-cart.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Road Hunter/TI Scramble/Titanium',
                    url: 'software/scrolling-trilogy.json'
                },
                {
                    type: 'ITEM',
                    name: 'Flappy Bird',
                    url: 'software/flappybird.json'
                },
                {
                    type: 'ITEM',
                    name: 'Sabre Wulf',
                    url: 'software/sabrewulf.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Sports',
                    url: 'software/sports.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Jet Set Willy',
                    url: 'software/jsw.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Bouncy',
                    url: 'software/bouncy.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Knight Lore',
                    url: 'software/knightlore8.bin'
                },
                {
                    type: 'ITEM',
                    name: 'Skyway',
                    url: 'software/skyway8.bin'
                },
                {
                    type: 'ITEM',
                    name: 'JetPac',
                    url: 'software/JetPac3.bin'
                },
                {
                    type: 'ITEM',
                    name: 'Pitfall!',
                    url: 'software/pitfall.json'
                },
                {
                    type: 'ITEM',
                    name: 'Break Free',
                    url: 'software/brkfree.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Flying Shark',
                    url: 'software/flying-shark-v1.2.rpk'
                }
            ]
        },
        {
            type: 'DIVIDER'
        },
        {
            type: 'SUBMENU',
            name: 'Demos',
            items: [
                {
                    type: 'ITEM',
                    name: 'Megademo',
                    url: 'software/ti99demo.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Horizontal scrolling demo',
                    url: 'software/hscroll.json'
                },
                {
                    type: 'ITEM',
                    name: 'Platform 2D scrolling demo',
                    url: 'software/platform.json'
                },
                {
                    type: 'ITEM',
                    name: 'Isometric scrolling demo',
                    url: 'software/isoscroll.json'
                },
                {
                    type: 'ITEM',
                    name: 'Dungeon demo',
                    url: 'software/dungeon.json'
                },
                {
                    type: 'ITEM',
                    name: 'Light-year demo',
                    url: 'software/light-year.json'
                },
                {
                    type: 'ITEM',
                    name: 'Lines demo',
                    url: 'software/lines.json'
                },
                {
                    type: 'ITEM',
                    name: 'Multicolor demo',
                    url: 'software/multicolor.json'
                },
                {
                    type: 'ITEM',
                    name: 'Scrolling Text demo',
                    url: 'software/scrolltxt.json'
                },
                {
                    type: 'ITEM',
                    name: 'Happy 2015 demo',
                    url: 'software/happy2015.json'
                },
                {
                    type: 'ITEM',
                    name: 'Another scrolling demo',
                    url: 'software/platform2.json'
                },
                {
                    type: 'ITEM',
                    name: 'Animated hat demo',
                    url: 'software/hat.rpk'
                },
                {
                    type: 'ITEM',
                    name: 'Monkey Island demo',
                    url: 'software/monkey8.rpk'
                }
            ]
        },
        {
            type: 'DIVIDER'
        },
        {
            type: 'SUBMENU',
            name: 'F18A specific',
            items: [
                {
                    type: 'ITEM',
                    name: 'F18A scrolling demo',
                    url: 'software/ecm3scroll.json'
                },
                {
                    type: 'ITEM',
                    name: 'F18A bitmap demo',
                    url: 'software/bitmap.json'
                },
                {
                    type: 'ITEM',
                    name: 'GPU image rotation',
                    url: 'software/gpu-rotate.json'
                },
                {
                    type: 'ITEM',
                    name: 'GPU lines demo',
                    url: 'software/gpu-lines.json'
                },
                {
                    type: 'ITEM',
                    name: 'GPU PIX lines demo',
                    url: 'software/gpu-pixlines.json'
                },
                {
                    type: 'ITEM',
                    name: 'GPU Mandelbrot (Tursi)',
                    url: 'software/gpu-mandelbrot.json'
                },
                {
                    type: 'ITEM',
                    name: 'Power Strike demo',
                    url: 'software/powerstrike.json'
                },
                {
                    type: 'ITEM',
                    name: 'Poly 3D demo',
                    url: 'software/poly3d.json'
                },
                {
                    type: 'ITEM',
                    name: 'Position attributes demo',
                    url: 'software/posattr.json'
                },
                {
                    type: 'ITEM',
                    name: 'TI-99 Mario Bros',
                    url: 'software/Mario3.bin'
                },
                {
                    type: 'ITEM',
                    name: 'Monkey Island Demo',
                    url: 'software/f18a-monkey8.bin'
                }
            ]
        },
        {
            type: 'DIVIDER'
        },
        {
            type: 'MORE',
            name: 'More...'
        }
    ];


    constructor(private moduleService: ModuleService) {
    }

    loadModuleFromMenu(url: string): Observable<Software> {
        if (url.substr(url.length - 3).toLowerCase() === 'rpk') {
            return this.moduleService.loadRPKModuleFromURL('assets/' + url);
        } else if (url.substr(url.length - 3).toLowerCase() === 'bin') {
            return this.moduleService.loadBinModuleFromURL('assets/' + url);
        } else if (url.substr(url.length - 4).toLowerCase() === 'json') {
            return this.moduleService.loadJSONModuleFromURL('assets/' + url);
        } else {
            const subject = new Subject<Software>();
            subject.error("Invalid url: " + url);
            return subject.asObservable();
        }
    }
}
