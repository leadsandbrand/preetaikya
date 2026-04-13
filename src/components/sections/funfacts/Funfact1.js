import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<div className="tj-countup-section section-gap">
			<div className="container fun-container">
				<div className="row">
					<div className="col-12">
						<div className="countup-wrap">
							<div className="countup-item fun">
								<FunfactSingle      currentValue={15} symbol={"K+"}   />

								<span className="count-text">MEALS DISTRIBUTED.</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={350} symbol={"k"} />
								<span className="count-text">SPALINGS DISTRIBUTED</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
									
							<div className="countup-item">
								<FunfactSingle currentValue={20} symbol={"+"} />
								<span className="count-text">GIRLS SUPPORT</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Funfact1;
