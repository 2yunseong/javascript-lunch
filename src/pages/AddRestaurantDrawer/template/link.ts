const link = () => {
  return `
    <label for="link text-caption">참고 링크</label>
    <input type="url" name="link" id="link" pattern="https?://.+">
    <span class="help-text text-caption">매장 정보를 확인할 수 있는 링크를 입력해 주세요.</span>
    `;
};

export default link;
