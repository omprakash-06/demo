export default function CertificateCard({ img, size }) {
  return (
    <div className="  flex items-center justify-center">
      <img
        src={img}
        alt="Certificate"
        className={size || "w-full h-full object-cover rounded-lg"}
      />
    </div>
  );
}
