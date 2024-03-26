export default function AddComment() {
  return (
    <form className="border border-base-content/5 p-6 rounded-lg">
      <textarea
        placeholder="افزودن دیدگاه"
        className="textarea textarea-lg w-full bg-base-200 mb-4"
        rows={3}
      />
      <button className="btn btn-custom min-w-36">ارسال</button>
    </form>
  );
}
