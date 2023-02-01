import React from "react";
import "./ClientesStyles.css"
import { Client } from "../../Comps/Client/Client";

export function Clientes(){
    const imgsTrag = "./clientesLogos/"
    return (
        <section id="clientes" className="clientes-container">
            <h2 className="clientes-container__title titlebar">¡ENCUENTRANOS!</h2>
            <ul className="clientes-container__list">
                <li>
                    <Client img={imgsTrag+"gamma.webp"}          re="https://www.google.com/search?client=ubuntu&hs=LS6&channel=fs&sxsrf=AJOqlzWNdOYFjBxUfDqBfKzxzESUntdISw:1674739836012&q=automercados+gama+caracas&npsic=0&rflfq=1&rldoc=1&rllag=10483164,-66845466,3409&tbm=lcl&sa=X&ved=2ahUKEwjs4pCIrOX8AhXvRzABHSzoAy8QtgN6BAgNEAE&biw=1360&bih=683&dpr=1#rlfi=hd:;si:;mv:[[10.50428707341401,-66.77487930522459],[10.415156014877102,-66.93624099956052],null,[10.459724743818194,-66.85556015239256],13]"/>
                </li>
                <li>
                    <Client img={imgsTrag+"cm.webp"}             re="https://www.google.com/search?q=automercados+central+madeirense&client=ubuntu&hs=l7Q&channel=fs&biw=1360&bih=683&tbm=lcl&sxsrf=AJOqlzX4dGP1Md_35-5DEX8b-6a6Ryr6zQ%3A1674739838767&ei=foDSY9bCLruSwt0P-rSEuAI&oq=automercados+central+ma+caracas&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMYADIFCAAQogQyBQgAEKIEMgUIABCiBDoECCMQJzoGCAAQFhAeOgoIIRCgARDDBBAKOgcIABANEIAEOggIABAIEB4QDToNCAAQCBAHEB4Q8QQQCjoICAAQCBAHEB46BggAEB4QDToICAAQBRAeEA06CggAEAUQHhANEA86CQgAEAgQHhDxBDoICCEQoAEQwwRQ3y5YwFJgvFZoC3AAeACAAb0CiAHUHJIBCDAuMTcuMy4xmAEAoAEBwAEB&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[10.59499083096271,-66.5388914886719],[10.238417857116714,-67.18433826601564],null,[10.416755337670097,-66.86161487734377],11]"/>
                </li>
                <li>
                    <Client img={imgsTrag+"la-muralla.webp"}    re="https://www.google.com/search?q=automercados+la+muralla&client=ubuntu&hs=lnl&channel=fs&biw=1360&bih=683&tbm=lcl&sxsrf=AJOqlzWTfiNRH4hjDvNWpiP0bJxIqajqDA%3A1674739881781&ei=qYDSY_-pL4aUwbkPicqd0A4&ved=0ahUKEwi_ovqdrOX8AhUGSjABHQllB-oQ4dUDCAg&uact=5&oq=automercados+la+muralla&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEANQkwRYyBlg2BpoAHAAeACAAQCIAQCSAQCYAQCgAQHAAQE&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[10.430071920978081,-66.82366178130643],[10.424500647925775,-66.83374688720242],null,[10.427286296913627,-66.82870433425443],17]"/>
                </li>
                <li>
                    <Client img={imgsTrag+"luvebras.webp"}       re="https://www.google.com/search?q=automercados+luvebras+caracas&client=ubuntu&channel=fs&biw=1920&bih=968&sz=0&tbm=lcl&sxsrf=AJOqlzUyFlRiq_-qaQJ1wArYe-NwJNcWuQ%3A1675083634275&ei=cr_XY9SxEM-VwbkP2bes8AU&ved=0ahUKEwjUsvXnrO_8AhXPSjABHdkbC14Q4dUDCAg&uact=5&oq=automercados+luvebras+caracas&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBAgjECcyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yCAgAEBYQHhAPMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgIIJlCMBVjCDWCqD2gAcAB4AIABgwKIAYMCkgEDMi0xmAEAoAEBwAEB&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[10.5037389,-66.8108547],[10.4558849,-66.89588380000001]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"/>
                </li>
                <li>
                    <Client img={imgsTrag+"plaza.webp"}          re="https://www.google.com/search?q=automercados+plazas&client=ubuntu&channel=fs&biw=960&bih=968&tbm=lcl&sxsrf=AJOqlzWfxU0nXrKjUHR1azLx5KFjWj-URQ%3A1674740246352&ei=FoLSY-qbFcOTwbkP5OCUmAE&ved=0ahUKEwjq_uXLreX8AhXDSTABHWQwBRMQ4dUDCAg&uact=5&oq=automercados+plazas&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBQgAEIAEMgoIABCABBAUEIcCMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CAgAEIAEELEDOggIABAWEB4QCjoKCAAQFhAeEA8QCjoGCAAQFhAeOgkIABAWEB4Q8QQ6BwgAEIAEEA1QsAZYlxVg5xdoBHAAeACAAYYCiAG_EZIBBTAuNy41mAEAoAEBwAEB&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[10.5200514,-66.5577097],[10.4152592,-66.97126580000001]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4"/>
                </li>
                <li>
                    <Client img={imgsTrag+"santarosa.webp"}      re="https://www.google.com/search?q=automercados+santarosa&client=ubuntu&channel=fs&biw=960&bih=968&tbm=lcl&sxsrf=AJOqlzUzXtUJlQZpn5Btjm_09kkMdU7kLQ%3A1674740266185&ei=KoLSY_2FC8L9wbkP0Ny66AY&ved=0ahUKEwj9wqDVreX8AhXCfjABHVCuDm0Q4dUDCAg&uact=5&oq=automercados+santarosa&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBwgAEA0QgAQ6BAgjECc6CggAEIAEEBQQhwI6BQgAEIAEOgYIABAWEB46AggmOgUIIRCgAVCBCVjeEWDREmgCcAB4AIABqgGIAb0KkgEDMC45mAEAoAEBwAEB&sclient=gws-wiz-local"/>
                </li>


                <li>
                    <Client img={imgsTrag+"emporium.webp"}      re="https://www.google.com/maps/search/automercados+emporium/@10.4729373,-66.5915143,13.96z"/>
                </li>
                <li>
                    <Client img={imgsTrag+"licarch.webp"}      re="https://www.google.com/maps/place/Licarch/@10.427467,-66.8470381,14.67z/data=!4m5!3m4!1s0x8c2af7bf2e033f23:0x7c46256e2ae9df72!8m2!3d10.4271168!4d-66.83773"/>
                </li>
                <li>
                    <Client img={imgsTrag+"luz.webp"}      re="https://www.google.com/maps/search/automercados+luz/@10.4738476,-66.8620983,12.87z"/>
                </li>
                <li>
                    <Client img={imgsTrag+"minegocio.webp"}      re="https://www.google.com/maps/search/automercados+mi+negocio/@10.4740272,-66.8620984,12z/data=!3m1!4b1"/>
                </li>
                <li>
                    <Client img={imgsTrag+"plansuarez.webp"}      re="https://www.google.com/maps/search/automercados+plansuarez/@10.4420513,-66.8359906,12.83z"/>
                </li>
                <li>
                    <Client img={imgsTrag+"santapaula.webp"}      re="https://www.google.com/maps/place/Supermercado+Santa+Paula/@10.461049,-66.8379306,17z/data=!3m1!4b1!4m5!3m4!1s0x8c2a586d6bb4e275:0xee52e11d4811916a!8m2!3d10.4610437!4d-66.8337044"/>
                </li>
                <li>
                    <Client img={imgsTrag+"unicasa.webp"}      re="https://www.google.com/search?q=automercados+unicasa+&client=ubuntu&hl=es&biw=1360&bih=683&tbm=lcl&sxsrf=AJOqlzXbV8hgQVxLqKaZkJsTcOkLXI60sQ%3A1675267320774&ei=-IzaY4eDL4r_wbkP76-CYA&ved=0ahUKEwiH37uM2fT8AhWKfzABHe-XAAwQ4dUDCAg&uact=5&oq=automercados+unicasa+&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yAggmMgIIJjICCCZQ3AVY3AVg9QZoAXAAeACAAYEBiAH5AZIBAzAuMpgBAKABAcABAQ&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[10.526124583672914,-66.73546561622052],[10.347849480065545,-67.0581890048924],null,[10.436999803986291,-66.89682731055646],12]"/>
                </li>
                <li>
                    <Client img={imgsTrag+"midespensa.webp"}      re="https://www.google.com/search?q=automercados+Mi+despensa&client=ubuntu&hl=es&biw=1360&bih=683&tbm=lcl&sxsrf=AJOqlzWbj8_mskkyV40Jv4TtHlkc35B71A%3A1675267742085&ei=no7aY-fyBKqYwbkP28GP6AI&ved=0ahUKEwjnua7V2vT8AhUqTDABHdvgAy0Q4dUDCAg&uact=5&oq=automercados+Mi+despensa&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBwgAEB4QogQyBQgAEKIEMgUIABCiBDIFCAAQogQyBQgAEKIEOgQIIxAnUMEKWNIZYOwcaAFwAHgAgAGtAYgBvAWSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[10.491553099999999,-66.8605152],[10.4816595,-66.94362199999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"/>
                </li>
            </ul>
        </section>
    )
}