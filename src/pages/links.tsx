import { ProfileCircle } from "../app/components/profile/circle"
import "../app/components/linktree/styles.css"
import { Atendimento } from "@/app/components/linktree/atendimento"

export default function Linktree() {
	return (

		<div className="flex flex-col min-h-screen">

			<div className="flex flex-col flex-grow w-full py-10 items-center justify-center">
				<ProfileCircle url="https://cdn-icons-png.flaticon.com/512/2818/2818366.png" title="" />
				<h1 className="md:text-4xl text-3xl font-bold text-white mt-5">Dr. Thiago e Dra. Rebeca</h1>
				<span className="text-gray-50 mb-5 mt-1">Seu dentista em Manaus</span>

				<main className="flex flex-col w-11/12 max-w-xl text-center items-center">

					<section className="bg-green-400 mb-4 w-11/12 py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
						<a href="https://wa.me/5592985648898" rel="noopener noreferrer">
							<p className="text-black text-base md:text-lg">Whatsapp Dr. Thiago Amorim</p>
						</a>
					</section>
					<section className="bg-green-400 mb-4 w-11/12 py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
						<a href="https://wa.me/5592984093240" rel="noopener noreferrer">
							<p className="text-black text-base md:text-lg">Whatsapp Dr. Rebeca Rezende</p>
						</a>
					</section>
					<section className="bg-gray-200 mb-4 w-11/12 py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
						<a href="/" target="_blank">
							<p className="text-black text-base md:text-lg">🖥️ Visite nossa página</p>
						</a>
					</section>
					<section className="bg-red-400  mb-4 w-11/12 py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
						<a href="#" rel="noopener noreferrer" target="_blank">
							<p className="text-black text-base md:text-lg">Instagram</p>
						</a>
					</section>

					<section className="w-11/12">
						<h3 className="text-left mb-2 text-white font-bold">📍 Nosso Endereço</h3>
						<iframe
							className="rounded-lg transition-all duration-300 hover:ring-4 hover:ring-blue-500 focus:ring-4 focus:ring-blue-500"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4969.711979317721!2d-60.052179724123825!3d-3.0760226968996514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c105d7b29da85%3A0xdab51681ba1a1d5e!2sR.%20Upanema%2C%20346%20-%20Alvorada%2C%20Manaus%20-%20AM%2C%2069042-090!5e1!3m2!1spt-BR!2sbr!4v1724533614287!5m2!1spt-BR!2sbr"
							width="100%"
							height="50%"
							loading="lazy"
						></iframe>
						<p className="text-sm py-2 text-white">
						Rua Upanema,346 - Alvorada II - Manaus, Amazonas.
						</p>
					</section>

					<section className="w-11/12">
						<h3 className="text-left mb-2 text-white font-bold">🦷 Nossas Atendimentos</h3>
						<div className="grid grid-cols-2 gap-4">
							<Atendimento url="https://laserodonto.com.br/wp-content/uploads/2021/08/dental-implant-chiangmai-thailand.webp" title="Implante" />
							<Atendimento url="https://drsergiocaetano.com.br/wp-content/uploads/2023/05/sem-titulo-269501327.jpg" title="Canal" />
							<Atendimento url="https://laserodonto.com.br/wp-content/uploads/2021/08/dental-implant-chiangmai-thailand.webp" title="Implante" />
							<Atendimento url="https://drsergiocaetano.com.br/wp-content/uploads/2023/05/sem-titulo-269501327.jpg" title="Canal" />
						</div>
					</section>

					<section className="w-11/12">
						<h2 className="text-left mb-2 text-white font-bold">🤝 Parceiros</h2>
						<section className="bg-gray-200 mb-4 w-full py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
							<a href="#" target="_blank">
								<p className="text-black text-base md:text-lg">Partner 1</p>
							</a>
						</section>
						<section className="bg-gray-200 mb-4 w-full py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
							<a href="#" target="_blank">
								<p className="text-black text-base md:text-lg">Partner 2</p>
							</a>
						</section>
						<section className="bg-gray-200 mb-4 w-full py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
							<a href="#" target="_blank">
								<p className="text-black text-base md:text-lg">Partner 3</p>
							</a>
						</section>
					</section>
				</main>

				<footer className="bottom-0 w-screen flex justify-center text-center">
					<p className="bg-gray-900 text-gray-500 w-screen py-3 px-3 text-xs">
						<span className="font-bold">© 2024
							<a href="https://github.com/otthonleao" rel="noopener noreferrer" target="_blank"> Muraton Software</a>
						</span> | development by
						<a href="https://github.com/otthonleao" rel="noopener noreferrer" target="_blank"> Otthon Leão 🧑‍💻</a></p>
				</footer>

			</div>
		</div>
	)
}
