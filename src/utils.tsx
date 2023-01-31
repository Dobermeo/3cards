export{}

export function getImageUrl(imageId: string, size = 's') {
    return (
      'https://i.imgur.com/j6xM5YA.jpeg' +
      imageId +
      size +
      '.jpg'
    );
  }