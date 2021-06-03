const AboutItem = ({ colourClass, text }) => (
  <div class={`row ${colourClass} pl-3 pl-sm-4 pb-1`}>
    <div class="col-12 bg-white pt-2 pb-2 pl-2 pr-1 text-left">
      <p class="pb-0 mb-0">{text}</p>
    </div>
  </div>
);

export default AboutItem;
