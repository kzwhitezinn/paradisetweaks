const userId1 = '1257769672720252951';
const avatarElement1 = document.getElementById('avatar1');
const nicknameElement1 = document.getElementById('nickname-text1');
const subnickElement1 = document.getElementById('subnick1');
const nitroBadge1 = document.getElementById('nitro-badge1');
const boostBadge1 = document.getElementById('boost-badge1');

const userId2 = '1234246197670187102';
const avatarElement2 = document.getElementById('avatar2');
const nicknameElement2 = document.getElementById('nickname-text2');
const subnickElement2 = document.getElementById('subnick2');
const nitroBadge2 = document.getElementById('nitro-badge2');
const boostBadge2 = document.getElementById('boost-badge2');

const userId3 = '832386616592957490';
const avatarElement3 = document.getElementById('avatar3');
const nicknameElement3 = document.getElementById('nickname-text3');
const subnickElement3 = document.getElementById('subnick3');
const nitroBadge3 = document.getElementById('nitro-badge3');
const boostBadge3 = document.getElementById('boost-badge3');

const userId4 = '1193428032250191912';
const avatarElement4 = document.getElementById('avatar4');
const nicknameElement4 = document.getElementById('nickname-text4');
const subnickElement4 = document.getElementById('subnick4');
const nitroBadge4 = document.getElementById('nitro-badge4');
const boostBadge4 = document.getElementById('boost-badge4');


async function fetchLanyardData(userId, avatarElement, nicknameElement, subnickElement, nitroBadge, boostBadge) {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const data = await response.json();

    if (data.success) {
      const { discord_user, premium_type } = data.data;

      const nickname = discord_user.global_name || discord_user.username;
      nicknameElement.textContent = nickname;

      subnickElement.textContent = `@${discord_user.username}`;

      avatarElement.src = `https://cdn.discordapp.com/avatars/${userId}/${discord_user.avatar}.png?size=512`;


      if (premium_type === 2) {
        nitroBadge.classList.remove('hidden');
      }
      if (premium_type === 1) {
        boostBadge.classList.remove('hidden');
      }
    } else {
      nicknameElement.textContent = 'Usuário não encontrado';
      subnickElement.textContent = '';
    }
  } catch (error) {
    nicknameElement.textContent = 'Erro ao carregar';
    subnickElement.textContent = '';
  }
}


fetchLanyardData(userId1, avatarElement1, nicknameElement1, subnickElement1, nitroBadge1, boostBadge1);
fetchLanyardData(userId2, avatarElement2, nicknameElement2, subnickElement2, nitroBadge2, boostBadge2);
fetchLanyardData(userId3, avatarElement3, nicknameElement3, subnickElement3, nitroBadge3, boostBadge3);
fetchLanyardData(userId4, avatarElement4, nicknameElement4, subnickElement4, nitroBadge4, boostBadge4);
