import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-parallax';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div class="loader">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <Navbar />
            <iframe width="100%" height="615" src="https://www.youtube.com/embed/mYJpIPNOh-0?showinfo=0&controls=0&rel=0" title="YouTube video player" modestbranding="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <iframe src="https://www.youtube.com/embed/mYJpIPNOh-0?autoplay=1&hd=1&cc_load_policy=1&controls=0&rel=0&loop=1" modestbranding="" allow="autoplay" frameborder="0"></iframe> */}

            <p data-aos="fade-right" className='first-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempora, commodi perspiciatis sed reprehenderit adipisci laboriosam earum error quis delectus ipsa cumque optio. <br />Sit commodi assumenda, asperiores vitae sunt temporibus maxime. Non distinctio iste corporis veritatis, eveniet vitae eos, dolor facere molestias consequuntur suscipit ex repudiandae rerum deleniti impedit temporibus dolore aspernatur voluptatum nihil dicta. <br />Cumque excepturi facere eius odit accusantium cum sint, nihil quaerat quos perspiciatis enim ducimus maiores suscipit, velit explicabo et, illo nesciunt necessitatibus numquam pariatur temporibus blanditiis error? Nisi et placeat animi eveniet, minus, quo veniam obcaecati blanditiis quod voluptates voluptatum odio, cupiditate laudantium nihil ducimus ut.</p>
            <div data-aos="fade-left" className='mission-title'>
                <h2 >Nos Missions </h2>
            </div>
            <section>
                <div className='first-part'>
                    <div className='part'>
                        <span className='picture'>
                            <img src="./photo3.jpg" alt="" />
                            <span className='text-picture'>
                                <p>technologies et matériel</p>
                                <button>en savoir plus</button>
                            </span>
                        </span>
                    </div>
                    <div className='first-part-picture'>
                        <span className='picture span1'>
                            <img src="./photo1.png" alt="" />
                            <span className='text-picture'>
                                <p>sécurisation du réseau</p>
                                <button>en savoir plus</button>
                            </span>
                        </span>
                        <span className='picture span2'>
                            <img src="./photo4.jpg" alt="" />
                            <span className='text-picture'>
                                <p>étude de projet</p>
                                <button>en savoir plus</button>
                            </span>

                        </span>
                    </div>
                </div>
                <div className='second-part'>
                    <span className='picture'>
                        <img src="photo2.jpg" alt="" />
                        <span className='text-picture'>
                            <p>optimisation économique</p>
                            <button>en savoir plus</button>
                        </span>
                    </span>
                </div>
            </section>
            <p data-aos="fade-right" className='first-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempora, commodi perspiciatis sed reprehenderit adipisci laboriosam earum error quis delectus ipsa cumque optio. <br />Sit commodi assumenda, asperiores vitae sunt temporibus maxime. Non distinctio iste corporis veritatis, eveniet vitae eos, dolor facere molestias consequuntur suscipit ex repudiandae rerum deleniti impedit temporibus dolore aspernatur voluptatum nihil dicta. <br />Cumque excepturi facere eius odit accusantium cum sint, nihil quaerat quos perspiciatis enim ducimus maiores suscipit, velit explicabo et, illo nesciunt necessitatibus numquam pariatur temporibus blanditiis error? Nisi et placeat animi eveniet, minus, quo veniam obcaecati blanditiis quod voluptates voluptatum odio, cupiditate laudantium nihil ducimus ut.</p>

            <div data-aos="fade-left" className='realization-title'>
                <h2 >Nos réalisations </h2>
            </div>
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam distinctio sit tempora cumque maxime modi omnis deleniti, rerum molestias nostrum molestiae incidunt sed eaque sint dignissimos quia inventore ullam soluta! Hic incidunt a unde accusamus reiciendis soluta possimus laboriosam saepe impedit eveniet ad fuga dicta labore, recusandae nisi doloribus cum quo corporis amet dolore! Architecto fugiat porro dolore, qui amet molestias placeat dolorem quasi! Accusamus, provident deserunt, explicabo, quia a aut doloribus dolorem corrupti aliquid suscipit inventore dolores blanditiis eligendi nisi ad! Sed esse dolore repellat? Magni facere et incidunt sapiente est, iste quaerat reprehenderit aspernatur nihil quisquam quidem dolorem vero quas, consequatur nulla assumenda ratione aliquid tenetur! Quae iure vel cumque ab quibusdam? Soluta voluptates voluptatum, corporis beatae adipisci illo. Corporis suscipit perferendis natus harum itaque delectus? Adipisci consequatur sequi recusandae, corrupti eaque labore incidunt cum nesciunt fuga quisquam, ullam nulla odio saepe quasi ducimus corporis aperiam dolore nobis qui hic amet minus? Quod eos, ratione omnis molestiae qui numquam repellat quaerat consequatur nisi suscipit, sapiente incidunt aliquid assumenda magni sed enim error laboriosam? Laborum quibusdam fugiat libero nemo. Hic quas numquam magnam aut, assumenda at impedit quod ipsa ea, animi ipsam magni voluptas, saepe itaque iste. Libero voluptatem molestias, error esse neque officia adipisci fugiat dolore repellendus vero amet cum eligendi alias quo omnis maiores quasi soluta mollitia sit in totam accusamus dicta accusantium! Dolore sit vero explicabo atque rerum debitis nihil numquam ea reiciendis placeat molestias nobis saepe, maiores adipisci ipsum perspiciatis repellat sequi recusandae consequatur fugiat. Repellat, ipsum? Ipsum laboriosam esse modi. Distinctio quidem enim, ad saepe aut, dicta, magni necessitatibus ipsum perspiciatis nam vitae error. Accusantium atque veniam blanditiis consequatur! At commodi fuga vitae culpa sit nostrum porro, dicta modi sapiente aperiam, quod inventore sint eligendi? Dolorem ea tempora quos molestiae impedit possimus at ut laboriosam sapiente vero illo obcaecati quibusdam rem natus odio ratione repudiandae fuga quidem adipisci, consequuntur eligendi eveniet doloremque. Eveniet error modi tempora cumque illum temporibus dignissimos quas eos reprehenderit? Laudantium ipsa officia a sint sunt minus blanditiis neque qui nisi quibusdam, optio atque, repellendus id? Et nisi excepturi illo velit dolor assumenda? Beatae sed quam repellat. Officia quae iste, est omnis maxime veniam delectus quo at atque odio nam dignissimos! Itaque impedit fugiat non, at, voluptas quas dignissimos, iste ipsum recusandae eligendi id. Maiores adipisci est enim mollitia dicta asperiores molestias, repudiandae error nulla ipsum labore? Quos, soluta aliquam.</p> */}
            <Parallax bgImage='parallax3.jpg' strength={400} className='parallax'>
                <div className='parallax_container'>
                    <div className='parallax-text'>Nous assurons des services complets ou partiels d’infogérance informatique, de la sécurité des réseaux à l’administration de parc et à la gestion complète du système d’information. <br /><br />Interlocuteur unique, de l’ingénierie au déploiement de nos solutions et de leur maintenance, nous intervenons auprès des TPE, PME/PMI et Collectivités régionales, et garantissons les mêmes services à tous nos clients, sans distinction de taille.</div>
                </div>
            </Parallax>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sint ea deserunt numquam delectus doloribus debitis repellat saepe ducimus! Minus similique expedita ullam quidem vitae. Numquam obcaecati doloribus quae! Expedita ab nihil recusandae labore minima! Praesentium omnis dolorem laudantium sunt minus ex deserunt quos minima quidem sapiente dolores nulla magni dolor amet mollitia ea, obcaecati, voluptatem provident, velit molestias quis repellendus rem reprehenderit! Quibusdam saepe veritatis soluta ex fugiat accusamus non accusantium assumenda sapiente, voluptates corporis temporibus et ut ad numquam, ducimus, asperiores facere tenetur nemo cum porro. Expedita, reprehenderit. Incidunt sequi iste dolores impedit sed at adipisci tenetur. Laborum, aspernatur, quis, eos et sed unde ipsam ab doloribus eius esse rem quod. Debitis autem vero, cumque eligendi asperiores, ipsa rerum delectus repudiandae perferendis, ducimus error necessitatibus voluptatum consequatur. Soluta sit quasi dolor sequi velit quo dignissimos sapiente aspernatur dolorem ab magnam reprehenderit eius quia, quaerat vero voluptatem accusamus similique odio optio excepturi nisi. Ratione deserunt voluptas repellat molestiae culpa consectetur nihil pariatur maxime, distinctio quod modi vel dolor sapiente, voluptatem soluta ad, exercitationem magnam! Non vel sequi exercitationem sapiente dignissimos, iusto consequuntur, quidem minus nemo ex impedit aliquid enim perferendis dolore veritatis sunt error sed itaque odio quasi deserunt! Harum in blanditiis temporibus ex facere corrupti sint excepturi architecto quas. Corrupti sed eum quis officia fugiat porro ex quasi est, minus vero illum adipisci repellendus, quod magni. Explicabo hic, accusamus omnis corrupti sit, sapiente, non earum quas tempora error pariatur quibusdam dicta dolore nihil at deleniti. Sunt pariatur, sequi magni itaque ducimus voluptates dicta in harum consequuntur quaerat esse ipsa, aliquid voluptatem hic ab facilis ex quia, voluptatibus ea cumque expedita numquam quisquam! Architecto cupiditate tenetur aliquid ipsum ullam eveniet, quibusdam sit voluptatibus, optio vitae amet perspiciatis expedita quasi porro asperiores saepe, vel culpa deserunt commodi reiciendis! Cumque, itaque ab. Consequuntur quis quo fugit omnis beatae praesentium nam optio dicta necessitatibus, consequatur neque similique. Accusamus asperiores inventore culpa incidunt ea! Tempora earum molestiae, illo ipsum consequuntur expedita modi in labore. Asperiores magnam doloremque ex eum quos iste, voluptas obcaecati labore beatae eos rem quidem! Iure cupiditate, reprehenderit magnam debitis libero modi consectetur illum saepe, harum impedit placeat molestias amet explicabo! Fugit et mollitia quia natus labore incidunt. Iusto, hic beatae, voluptates, quidem reprehenderit facilis minus enim reiciendis pariatur magnam asperiores tempore neque velit perferendis placeat error sunt animi delectus in. Accusantium soluta neque, autem porro laboriosam enim impedit rerum eaque. Quod cupiditate voluptatum pariatur non soluta molestiae facere officiis nobis, fuga odit! Possimus cum est officia a soluta. Perferendis saepe corporis sapiente minima cum natus blanditiis recusandae voluptate culpa consequuntur omnis doloremque, aliquid voluptatibus reprehenderit architecto, cupiditate sed dolore. Voluptas consequatur dolores tempore provident eos unde autem ratione? Nobis libero ipsam consectetur ex magni eos atque adipisci nihil placeat non? Est dolore accusantium debitis doloribus, repellendus quibusdam. Autem repellendus nulla velit nostrum, officiis reprehenderit deleniti odio dignissimos laudantium ex soluta incidunt fugit ducimus illum perferendis dolorem recusandae dolorum eos. Blanditiis unde ducimus a vero quo iusto fugit libero explicabo!</p>
        </div>
    );
};

export default Home;